import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import useUser from '../lib/useUser'

function useHostOnlyPage() {
    const { userData, userLoading } = useUser();
    const navigate = useNavigate();
    useEffect(() => {
        if (!userLoading) {
            if (!userData?.is_host) {
                navigate("/");
            }
        }
    }, [userLoading, userData, navigate])
    return;
}

export default useHostOnlyPage