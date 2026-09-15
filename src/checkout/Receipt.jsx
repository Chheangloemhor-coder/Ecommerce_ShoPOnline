import jsPDF from "jspdf";

export function createReceiptPDF(order) {
    const doc = new jsPDF();

    const {
        orderId,
        formData,
        cart,
        subtotal,
        shipping,
        total,
    } = order;

    // ==========================================
    // HEADER
    // ==========================================

    doc.setFillColor(249, 115, 22);
    doc.rect(0, 0, 210, 35, "F");

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(24);
    doc.setFont("helvetica", "bold");

    doc.text("RECEIPT", 20, 22);

    // ==========================================
    // ORDER INFO
    // ==========================================

    doc.setTextColor(0, 0, 0);
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");

    doc.text(`Order ID: ${orderId}`, 20, 48);

    doc.text(
        `Date: ${new Date().toLocaleDateString()}`,
        20,
        56
    );

    doc.text(
        `Payment: ${String(
            formData.paymentMethod
        ).toUpperCase()}`,
        20,
        64
    );

    // ==========================================
    // CUSTOMER INFORMATION
    // ==========================================

    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");

    doc.text("Customer Information", 20, 82);

    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");

    doc.text(
        `Name: ${formData.firstName} ${formData.lastName}`,
        20,
        92
    );

    doc.text(
        `Email: ${formData.email}`,
        20,
        100
    );

    doc.text(
        `Phone: ${formData.phone}`,
        20,
        108
    );

    doc.text(
        `Address: ${formData.address}`,
        20,
        116
    );

    doc.text(
        `City: ${formData.city}`,
        20,
        124
    );

    doc.text(
        `Province: ${formData.province}`,
        20,
        132
    );

    if (formData.postalCode) {
        doc.text(
            `Postal Code: ${formData.postalCode}`,
            20,
            140
        );
    }

    // ==========================================
    // ORDER ITEMS
    // ==========================================

    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");

    doc.text("Order Items", 20, 157);

    // Table background
    doc.setFillColor(245, 245, 245);
    doc.rect(20, 163, 170, 10, "F");

    doc.setFontSize(9);
    doc.setFont("helvetica", "bold");

    doc.text("Product", 23, 170);
    doc.text("Qty", 125, 170);
    doc.text("Price", 145, 170);
    doc.text("Total", 170, 170);

    // ==========================================
    // PRODUCTS
    // ==========================================

    let y = 181;

    doc.setFont("helvetica", "normal");

    cart.forEach((product) => {
        const quantity = Number(
            product.quantity || 0
        );

        const price = Number(
            product.price || 0
        );

        const itemTotal = quantity * price;

        const productName = String(
            product.name || "Product"
        ).substring(0, 42);

        doc.text(productName, 23, y);

        doc.text(
            String(quantity),
            127,
            y
        );

        doc.text(
            `$${price.toFixed(2)}`,
            143,
            y
        );

        doc.text(
            `$${itemTotal.toFixed(2)}`,
            168,
            y
        );

        y += 9;

        // Create another page if needed
        if (y > 260) {
            doc.addPage();

            y = 25;
        }
    });

    // ==========================================
    // TOTALS
    // ==========================================

    y += 8;

    doc.setDrawColor(200, 200, 200);

    doc.line(
        120,
        y,
        190,
        y
    );

    y += 10;

    doc.setFontSize(10);

    doc.text(
        "Subtotal:",
        130,
        y
    );

    doc.text(
        `$${Number(subtotal).toFixed(2)}`,
        170,
        y
    );

    y += 8;

    doc.text(
        "Shipping:",
        130,
        y
    );

    doc.text(
        shipping === 0
            ? "FREE"
            : `$${Number(shipping).toFixed(2)}`,
        170,
        y
    );

    y += 10;

    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");

    doc.text(
        "TOTAL:",
        130,
        y
    );

    doc.text(
        `$${Number(total).toFixed(2)}`,
        168,
        y
    );

    // ==========================================
    // FOOTER
    // ==========================================

    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");

    doc.setTextColor(
        120,
        120,
        120
    );

    doc.text(
        "Thank you for your purchase!",
        105,
        285,
        {
            align: "center",
        }
    );

    // IMPORTANT
    // Return PDF as Blob
    return doc.output("blob");
}