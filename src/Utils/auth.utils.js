export async function loginFunction(username,password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password})
    };

    const response = await fetch(`http://localhost:3000/account/login`,requestOptions);
    const data = await response.json();
    return data?.token;
}