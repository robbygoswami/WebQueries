
document.addEventListener('DOMContentLoaded', function () {
    const convertBtn = document.getElementById('convertBtn');
    const resultElement = document.getElementById('result');

    convertBtn.addEventListener('click', function () {
        const frequencyInput = document.getElementById('frequency').value;
        const frequency = parseFloat(frequencyInput);

        if (!isNaN(frequency) && frequency > 0) {
            const speedOfLight = 299792458; // Speed of light in meters per second
            const wavelength = speedOfLight / frequency;

            resultElement.textContent = `Wavelength: ${wavelength.toFixed(2)} meters`;
        } else {
            resultElement.textContent = 'Please enter a valid positive frequency.';
        }
    });
});
