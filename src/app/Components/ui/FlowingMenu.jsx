import React from 'react';
import { gsap } from 'gsap';

import './FlowingMenu.css';

function FlowingMenu({ items = [], expandedId, onMenuItemClick }) {
    return (
        <div className="menu-wrap">
            <nav className="menu">
                {items.map((item, idx) => (
                    <MenuItem
                        key={idx}
                        {...item}
                        isExpanded={expandedId === item.id}
                        onClick={() => onMenuItemClick(item.id === expandedId ? null : item.id, item.text)} // Toggle
                    >
                        {item.children}
                    </MenuItem>
                ))}
            </nav>
        </div>
    );
}

function MenuItem({ link, text, image, isExpanded, onClick, children }) {
    const itemRef = React.useRef(null);
    const marqueeRef = React.useRef(null);
    const marqueeInnerRef = React.useRef(null);

    // Ref for the header to calculate marquee position relative to it, not the whole item (which includes content now)
    const headerRef = React.useRef(null);

    const animationDefaults = { duration: 0.6, ease: 'expo' };

    const findClosestEdge = (mouseX, mouseY, width, height) => {
        const topEdgeDist = distMetric(mouseX, mouseY, width / 2, 0);
        const bottomEdgeDist = distMetric(mouseX, mouseY, width / 2, height);
        return topEdgeDist < bottomEdgeDist ? 'top' : 'bottom';
    };

    const distMetric = (x, y, x2, y2) => {
        const xDiff = x - x2;
        const yDiff = y - y2;
        return xDiff * xDiff + yDiff * yDiff;
    };

    const hoverAudioRef = React.useRef(null);
    const clickAudioRef = React.useRef(null);

    React.useEffect(() => {
        hoverAudioRef.current = new Audio("https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3");
        clickAudioRef.current = new Audio("https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3");
        hoverAudioRef.current.volume = 0.5;
        clickAudioRef.current.volume = 0.6;
    }, []);

    const playHover = () => {
        if (hoverAudioRef.current) {
            hoverAudioRef.current.currentTime = 0;
            hoverAudioRef.current.play().catch(() => {});
        }
    };

    const playClick = () => {
        if (clickAudioRef.current) {
            clickAudioRef.current.currentTime = 0;
            clickAudioRef.current.play().catch(() => {});
        }
    };

    const handleMouseEnter = ev => {
        playHover();
        if (!headerRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
        const rect = headerRef.current.getBoundingClientRect();
        const x = ev.clientX - rect.left;
        const y = ev.clientY - rect.top;
        const edge = findClosestEdge(x, y, rect.width, rect.height);

        gsap
            .timeline({ defaults: animationDefaults })
            .set(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
            .set(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0)
            .to([marqueeRef.current, marqueeInnerRef.current], { y: '0%' }, 0);
    };

    const handleMouseLeave = ev => {
        if (!headerRef.current || !marqueeRef.current || !marqueeInnerRef.current) return;
        const rect = headerRef.current.getBoundingClientRect();
        const x = ev.clientX - rect.left;
        const y = ev.clientY - rect.top;
        const edge = findClosestEdge(x, y, rect.width, rect.height);

        gsap
            .timeline({ defaults: animationDefaults })
            .to(marqueeRef.current, { y: edge === 'top' ? '-101%' : '101%' }, 0)
            .to(marqueeInnerRef.current, { y: edge === 'top' ? '101%' : '-101%' }, 0);
    };

    const handleClick = (e) => {
        e.preventDefault();
        playClick();
        if (onClick) {
            onClick();
        }
    };

    const repeatedMarqueeContent = Array.from({ length: 4 }).map((_, idx) => (
        <React.Fragment key={idx}>
            <span>{text}</span>
            <div className="marquee__img" style={{ backgroundImage: `url(${image})` }} />
        </React.Fragment>
    ));

    return (
        <div className={`menu__item ${isExpanded ? 'is-expanded' : ''}`} ref={itemRef}>

            {/* Header Area */}
            <div
                className="menu__item-header"
                ref={headerRef}
                style={{ position: 'relative', overflow: 'hidden' }}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onClick={handleClick}
            >
                <a className="menu__item-link" href={link} onMouseEnter={handleMouseEnter}>
                    {text}
                </a>
                <div className="marquee" ref={marqueeRef}>
                    <div className="marquee__inner-wrap" ref={marqueeInnerRef}>
                        <div className="marquee__inner" aria-hidden="true">
                            {repeatedMarqueeContent}
                        </div>
                    </div>
                </div>
            </div>

            {/* Expanded Content Area */}
            <div
                className="menu__item-content"
                style={{
                    height: isExpanded ? 'auto' : 0,
                    opacity: isExpanded ? 1 : 0,
                    overflow: 'hidden',
                    transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
            >
                <div className="p-4 bg-black">
                    {children}
                </div>
            </div>

        </div>
    );
}

export default FlowingMenu;
