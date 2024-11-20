document.getElementById('partyForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    // Prevent form from submitting normally
    const name = document.getElementById('name').value.trim();
    const age = parseInt(document.getElementById('age').value, 10);
    const gender = document.getElementById('gender').value;
  
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = ''; 
    
    // Clear previous messages
    messageDiv.classList.remove('success', 'error'); 
    
    // Reset message classes
      if (age < 18) {
      messageDiv.classList.add('error');
      messageDiv.textContent = 'You must be at least 18 years old to register.';
    } else if (gender !== 'Male') {
      messageDiv.classList.add('error');
      messageDiv.textContent = 'Only males are allowed to register.';
    } else {
      messageDiv.classList.add('success');
      messageDiv.textContent = `Welcome, ${name}! You have successfully registered for Mr. Kunle's birthday party.`;
    }
  });
  
