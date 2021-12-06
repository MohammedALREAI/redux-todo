import React, { FunctionComponent } from 'react'

interface Props {
    isLoading?: boolean;
    error?: string;
}

export const Wrapper: FunctionComponent<Props> = ({ isLoading, children, error }) => {
    if (isLoading) return <p>... loading</p>
    if (error) return <p> {error}</p>
    else return <>{children}</>
}
