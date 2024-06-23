import clsx from 'clsx';
import React from 'react'

interface Props {
    className?: string;
    children: React.ReactNode
    enableJustifyBetween?: boolean
}

export const Flex: React.FC<Props> = ({ className, children, enableJustifyBetween = false }) => {
    return (
        <div className={clsx('flex items-center', className, {
            'justify-between': enableJustifyBetween
        })}>{children}</div>
    )
}
