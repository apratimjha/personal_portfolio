import React from 'react';
import useMousePosition from '@/hooks/useMousePosition';

const CursorTrail = () => {
    const cursorPosition = useMousePosition();

    return (
        <div className="cursor-trail" style={{ left: cursorPosition.x - 10, top: cursorPosition.y - 10 }}></div>
    );
};

export default CursorTrail;