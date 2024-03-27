

import React, { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate();
    const [loggedIn, setLoggedIn] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username === 'user' && password === 'password') {
            setLoggedIn(true);
            navigate('/home');
        } else {
            // Добавляем проверку на пустые поля
            if (username === '' || password === '') {
                alert('Введите имя пользователя и пароль');
            } else {
                alert('Неправильное имя пользователя или пароль');
            }
        }
    };

    if (loggedIn) {
        return null;
    }

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" align="center" gutterBottom>
                Вход
            </Typography>
            <form>
                <TextField
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    label="Имя пользователя"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    sx={{ width: '300px' }}
                    autoComplete="username"
                />
                <TextField
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    label="Пароль"
                    variant="outlined"
                    type="password"
                    fullWidth
                    margin="normal"
                    sx={{ width: '300px' }}
                    autoComplete="current-password"
                />
                <Button
                    onClick={handleLogin}
                    sx={{ width: '300px' }}
                    variant="contained"
                    color="primary"
                    fullWidth
                >
                    Войти
                </Button>
            </form>
        </Container>
    );
};

export default LoginPage;