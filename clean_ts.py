import os
import re

def clean_file(filepath):
    print(f"Cleaning {filepath}...")
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # Generic cleaning for shadcn components converted to JSX
    
    # 1. Remove all interfaces and types
    content = re.sub(r'export interface\s+\w+\s+(?:extends\s+[^{]+)?\{[^}]*\}', '', content, flags=re.MULTILINE)
    content = re.sub(r'interface\s+\w+\s+(?:extends\s+[^{]+)?\{[^}]*\}', '', content, flags=re.MULTILINE)
    content = re.sub(r'type\s+\w+\s+=\s+[^;]+;', '', content, flags=re.MULTILINE)
    
    # 2. Fix generic React.forwardRef and remove type parameters
    # React.forwardRef<HTMLButtonElement, ButtonProps> -> React.forwardRef
    content = re.sub(r'React\.forwardRef\s*<[^>]+>', 'React.forwardRef', content)

    # 3. Remove type annotations in function parameters and component definitions
    # function X({ ... }: Props) -> function X({ ... })
    content = re.sub(r'\)\s*:\s*\w+\s*\{', ') {', content)
    # const X = ({ ... }: Props) -> const X = ({ ... })
    content = re.sub(r'\)\s*:\s*\w+\s*=>', ') =>', content)
    
    # 4. Remove type casts like "as HTMLButtonElement" but NOT "import * as React"
    # We look for "as " preceded by a space and NOT preceded by "*"
    content = re.sub(r'(?<!\*)\s+as\s+[A-Z]\w+', '', content)

    # 5. Fix alias imports
    content = content.replace('@/lib/utils', '../../../lib/utils')
    
    # 6. Restore common React imports if they were mangled
    content = content.replace('import *  from "react"', 'import * as React from "react"')
    content = content.replace('import * from "react"', 'import * as React from "react"')

    with open(filepath, 'w', encoding='utf-8', newline='') as f:
        f.write(content)

def walk_and_clean(directory):
    for root, dirs, files in os.walk(directory):
        for file in files:
            if file.endswith('.jsx'):
                clean_file(os.path.join(root, file))

if __name__ == "__main__":
    target_dir = r"c:\Users\amity\OneDrive\Documents\Venturenest\Venturenest_website\src\app\Components"
    walk_and_clean(target_dir)
    print("Done.")
