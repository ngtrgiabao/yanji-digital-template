const navSlider = document.querySelectorAll(".slider__wrapper");

navSlider.forEach((wrapper) => {
    const sliderItems = [
        "Dây chuyền",
        "Vòng tay",
        "Nhẫn",
        "Giày",
        "Balo",
        "Quần áo",
        "Phụ kiện",
    ];

    wrapper.innerHTML = sliderItems
        .map((item) => `<li class="slider__wrapper-item">${item}</li>`)
        .join("");
});
