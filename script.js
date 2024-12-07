class Smoothie {
    constructor(size, ingredients) {
        this.size = size;
        this.ingredients = ingredients;
        this.price = this.calculatePrice();
    }

    // Calculate the price based on the size and ingredients
    calculatePrice() {
        let basePrice = 5;  // Base price for a small smoothie
        if (this.size === "medium") basePrice += 2;
        if (this.size === "large") basePrice += 4;

        // Each ingredient adds $1
        basePrice += this.ingredients.length;

        return basePrice.toFixed(2);  // Returning as a string with 2 decimal places
    }

    // Get the image based on size
    getImage() {
        const images = {
            small: "Smoothie images/small.jpeg",
            medium: "Smoothie images/medium.jpeg",
            large: "Smoothie images/large.jpeg"
        };
        return images[this.size] || "Smoothie images/default.jpeg";  // Default if size is unknown
    }

    // Generate the order summary text
    getOrderSummary() {
        return `
            <p>Size: ${this.size.charAt(0).toUpperCase() + this.size.slice(1)}</p>
            <p>Ingredients: ${this.ingredients.join(", ")}</p>
            <p>Price: $${this.price}</p>
        `;
    }
}

// Handle form submission
document.getElementById("smoothie-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const size = document.getElementById("size").value;
    const ingredients = Array.from(document.getElementById("ingredients").selectedOptions)
        .map(option => option.value);

    // Create a new smoothie object
    const smoothie = new Smoothie(size, ingredients);

    // Update the order summary and display the smoothie image
    document.getElementById("order-summary").innerHTML = smoothie.getOrderSummary();
    document.getElementById("smoothie-image").src = smoothie.getImage();
});
