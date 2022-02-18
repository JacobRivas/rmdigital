function mostrarMensaje(tipo, mensaje) {
    const div = document.getElementById("mensajes");
    if( tipo == 'error') {
        div.className = "error"
    } else {
        div.className = "ok"
    }
    div.innerHTML = mensaje
}

function registrarCliente (event) {
    event.preventDefault();

    const boton = document.getElementById("boton").disabled = true;

  
    const nombre = document.getElementById("name").value;
    const nombre = document.getElementById("email").value;
    const nombre = document.getElementById("subject").value;

    

    const baseURL  = "https://mwfvetdupmlzkixhmkdz.supabase.co"
    const apiCall   = 'rest/v1/Formulario'
    const apiKey    = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoic2VydmljZV9yb2xlIiwiaWF0IjoxNjQzOTI1MzExLCJleHAiOjE5NTk1MDEzMTF9.BJagNEYOgJfTQ6goey8EGbFDghdnUpMX6x8c3yOS0S4"
    const url       = baseURL + apiCall

    const Formulario = {
        nombre,
        email,
        subject,
                
    } 

    fetch(url, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "apikey": apiKey,
            "authorization": "Bearer "+apiKey
        },
        body: JSON.stringify(Formulario)