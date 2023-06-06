const flipCardWrapper = document.querySelectorAll(".flip");

flipCardWrapper.forEach((wrapper) => {
    wrapper.innerHTML = Array.from({ length: 8 })
        .map(
            () => `
                    <div class="flip-card">
                        <div class="flip-card__front"></div>
                    </div>`
        )
        .join("");
});