document.addEventListener("DOMContentLoaded", function() {
    

    const headers = document.querySelectorAll('.accordion-header');
    
    headers.forEach(header => {
        header.addEventListener('click', function() {
            
            headers.forEach(h => {
                if (h !== this) {
                    h.classList.remove('active');
                    h.nextElementSibling.classList.remove('expanded');
                }
            });

            
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            content.classList.toggle('expanded');
        });
    });

    const searchForm = document.querySelector('.bus-search-form');
    const origenSelect = document.getElementById('origen');
    const destinoSelect = document.getElementById('destino');
    const salidaInput = document.getElementById('salida');

    
    const today = new Date().toISOString().split('T')[0];
    salidaInput.setAttribute('min', today);
    
   
    searchForm.addEventListener('submit', function(e) {
        let isValid = true;

 
        document.querySelectorAll('.error-message').forEach(el => el.remove());
        
        
        function displayError(element, message) {
            const errorDiv = document.createElement('div');
            errorDiv.className = 'error-message';
            errorDiv.style.color = '#ff4444'; 
            errorDiv.style.marginTop = '5px';
            errorDiv.style.fontSize = '0.9em';
            errorDiv.textContent = message;
            element.closest('.form-group').appendChild(errorDiv);
            isValid = false;
        }

        
        if (origenSelect.value && destinoSelect.value && origenSelect.value === destinoSelect.value) {
            e.preventDefault();
            displayError(destinoSelect, "El origen y el destino no pueden ser iguales.");
            destinoSelect.focus();
            return; 
        }

        
        if (!origenSelect.value) {
            e.preventDefault();
            displayError(origenSelect, "Por favor, seleccione un Origen.");
            isValid = false;
        }

        if (!destinoSelect.value) {
            e.preventDefault();
            displayError(destinoSelect, "Por favor, seleccione un Destino.");
            isValid = false;
        }
        
        if (!salidaInput.value) {
            e.preventDefault();
            displayError(salidaInput, "Por favor, ingrese una fecha de Salida.");
            isValid = false;
        }


        if (isValid) {
           
        }
    });

   
    const reclamacionesForm = document.querySelector('.reclamaciones-form');
    
    if (reclamacionesForm) {
        reclamacionesForm.addEventListener('submit', function(e) {
            e.preventDefault(); 

            const nombre = document.getElementById('nombre').value;
            const reclamacion = document.getElementById('reclamacion').value;

            if (nombre.trim() === "" || reclamacion.trim() === "") {
                alert("Por favor, rellene todos los campos del Libro de Reclamaciones.");
                return;
            }


            alert("¡Reclamación enviada con éxito! Gracias por su feedback, " + nombre + ".");

       
            reclamacionesForm.reset();
        });
    }

});