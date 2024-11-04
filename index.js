document.getElementById('printBtn').addEventListener('click', function() {
    const element = document.getElementById('invoice');
    html2pdf()
        .from(element)
        .save('invoice.pdf'); // Name of the PDF file
});

// Optional: Add a print functionality for Ctrl + P
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key === 'p') {
        e.preventDefault(); // Prevent default print
        const element = document.getElementById('invoice');
        html2pdf()
            .from(element)
            .save('invoice.pdf'); // Name of the PDF file
    }
});