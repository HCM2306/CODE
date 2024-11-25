@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #6a11cb, #2575fc);
    overflow: hidden;
}

.auth-container {
    width: 100%;
    max-width: 400px;
    background: rgba(255, 255, 255, 0.1);
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
}

.hidden {
    display: none;
}

.auth-form {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.title {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: #fff;
    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
}

.input-group {
    position: relative;
    width: 100%;
    margin-bottom: 1.5rem;
}

.input-group input {
    width: 100%;
    padding: 10px 10px 10px 40px;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
    outline: none;
    transition: all 0.3s ease;
}

.input-group label {
    position: absolute;
    left: 10px;
    top: 10px;
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.9rem;
    transition: all 0.3s ease;
}

.input-group input:focus + label,
.input-group input:valid + label {
    top: -10px;
    left: 10px;
    font-size: 0.8rem;
    color: #6a11cb;
}

.input-group .focus {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2px;
    width: 100%;
    background: #6a11cb;
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
}

.input-group input:focus ~ .focus {
    transform: scaleX(1);
}

.btn {
    padding: 10px 20px;
    font-size: 1rem;
    color: #fff;
    background: linear-gradient(135deg, #6a11cb, #2575fc);
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
    text-transform: uppercase;
    width: 100%;
}

.btn:hover {
    transform: scale(1.1);
    background: linear-gradient(135deg, #2575fc, #6a11cb);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
}

.switch-text {
    margin-top: 1rem;
    color: #fff;
    font-size: 0.9rem;
}

.switch-btn {
    color: #6a11cb;
    font-weight: bold;
    cursor: pointer;
    text-decoration: underline;
}
