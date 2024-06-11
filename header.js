var count = JSON.parse(localStorage.getItem('count'));

document.querySelector('#header').innerHTML = `    <header class="p-2 w-100 position-fixed top-0 z-3" style="background-color: rgba(33, 51, 68, 95%);">
<div class="container">
    <nav class="navbar navbar-expand-lg align-items-center">
        <a href="javascript:void(0);"><img src="asset/img/logo.webp" alt="" class="navbar-brand"
                width="100px"></a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#click">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="div">
            <ul class="d-flex align-items-center list-unstyled float-end mb-0">
                <li class="mx-3">
                    <a href="" class="icon-h position-relative"><i
                            class="bi bi-search text-white fs-5"></i></a>
                </li>
                <li class="mx-3">
                    <a href="#" class="icon-h position-relative" data-bs-toggle="modal"
                        data-bs-target="#login"><i class="bi bi-person-circle text-white fs-5"></i></a>
                </li>
                <li class="mx-3">
                    <a href="" class="icon-h position-relative"><i
                            class="bi bi-heart text-white fs-5"></i></a>
                </li>
                <li class="mx-3">
                    <a href="cart.html" class="icon-h position-relative"><i
                            class="bi bi-cart-plus text-white fs-5"></i></a>
                </li>
            </ul>
        </div>
        <div class="collapse navbar-collapse" id="click">
            <ul class="navbar-nav mx-auto">
                <li class="mx-3">
                    <a href="index.html" class="nav-link fw-semibold text-white fs-6">Home</a>
                </li>
                <li class="mx-3">
                    <a href="#product" class="nav-link fw-semibold text-white fs-6">Products</a>
                </li>
                <li class="mx-3">
                    <a href="#service" class="nav-link fw-semibold text-white fs-6">Services</a>
                </li>
                <li class="mx-3">
                    <a href="#gallery" class="nav-link fw-semibold text-white fs-6">Gallery</a>
                </li>
                <li class="mx-3">
                    <a href="#ass" class="nav-link fw-semibold text-white fs-6">Assesories</a>
                </li>
                <li class="mx-3">
                    <a href="#about" class="nav-link fw-semibold text-white fs-6">About</a>
                </li>
                <li class="mx-3 position-relative">
                    <a href="cart.html" class="nav-link fw-semibold text-white fs-6 border rounded-4">Cart</a>
                    <span class="position-absolute count" id="count">${count}</span>
                </li>
            </ul>
        </div>
        <div class="div1">
            <ul class="d-flex align-items-center list-unstyled float-end mb-0">
                <li class="mx-3">
                    <a href="" class="icon-h position-relative"><i
                            class="bi bi-search text-white fs-5"></i></a>
                </li>
                <li class="mx-3">
                    <a href="#" class="icon-h position-relative" data-bs-toggle="modal"
                        data-bs-target="#login"><i class="bi bi-person-circle text-white fs-5"></i></a>
                </li>
                <li class="mx-3">
                    <a href="" class="icon-h position-relative"><i
                            class="bi bi-heart text-white fs-5"></i></a>
                </li>
                <li class="mx-3">
                    <a href="cart.html" class="icon-h position-relative"><i
                        class="bi bi-cart-plus text-white fs-5"></i></a>
                </li>
            </ul>
        </div>
    </nav>
</div>
</header>`