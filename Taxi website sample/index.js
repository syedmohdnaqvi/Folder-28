document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('booking-form');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const pickupLocation = document.getElementById('pickup-location').value;
    const dropLocation = document.getElementById('drop-location').value;

    if (pickupLocation && dropLocation) {
      const response = await fetch('/bookings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pickupLocation, dropLocation }),
      });

      if (response.ok) {
        alert('Taxi booked successfully!');
      } else {
        alert('Failed to book taxi. Please try again later.');
      }
    }
  });
});
