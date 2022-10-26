import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import useUser from '../lib/useUser'

interface IProtectedPageProps {
    children: React.ReactNode
}

function ProtectedPage({ children }: IProtectedPageProps) {
    const { userData, isLoggedIn, userLoading } = useUser();
    const navigate = useNavigate();
    useEffect(() => {
        if (!userLoading) {
            if (!isLoggedIn) {
                navigate("/");
            }
        }
    }, [userLoading, isLoggedIn, navigate])
    return (
        <>{children}</>
    )
}

export default ProtectedPage