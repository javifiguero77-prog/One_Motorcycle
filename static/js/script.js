const filters = document.querySelectorAll('.filter');
const cards = document.querySelectorAll('.moto-card');
const label = document.getElementById('filter-label');


// ==============================
// FILTROS POR MARCA
// ==============================

filters.forEach(filter => {

    filter.addEventListener('click', () => {

        filters.forEach(f => {
            f.classList.remove('active');
        });

        filter.classList.add('active');

        const brand = filter.dataset.brand;

        label.textContent =
            brand === 'all'
                ? 'Marca: Todas'
                : `Marca: ${brand}`;

        cards.forEach(card => {

            if (
                brand === 'all' ||
                card.dataset.brand === brand
            ) {
                card.style.display = '';
            } else {
                card.style.display = 'none';
            }

        });

    });

});


// ==============================
// MODAL DE DETALLES
// ==============================

const modal = document.getElementById('detail-modal');
const closeModal = document.getElementById('close-modal');

const detailButtons = document.querySelectorAll('.detail-btn');

detailButtons.forEach(button => {

    button.addEventListener('click', () => {

        const id = button.dataset.detail;

        const moto = motos.find(
            m => m.id_motocicleta == id
        );

        if (!moto) {
            return;
        }


        // TÍTULO

        document.getElementById('modal-title').textContent =
            `${moto.marca} ${moto.modelo}`;


        // PRECIO

        document.getElementById('modal-price').textContent =
            `$${Number(moto.precio).toLocaleString('en-US', {
                minimumFractionDigits: 2
            })}`;


        // DATOS

        document.getElementById('modal-anio').textContent =
            moto.anio;

        document.getElementById('modal-color').textContent =
            moto.color || 'No registrado';

        document.getElementById('modal-cilindraje').textContent =
            moto.cilindraje
                ? `${moto.cilindraje} cc`
                : 'No registrado';

        document.getElementById('modal-estado').textContent =
            moto.estado;


        // DESCRIPCIÓN

        document.getElementById('modal-descripcion').textContent =
            moto.descripcion ||
            'Sin descripción registrada.';


        // ESPECIFICACIONES

        document.getElementById('modal-especificaciones').textContent =
            moto.especificaciones ||
            'Sin especificaciones registradas.';


        // IMAGEN

        const modalImage =
            document.getElementById('modal-image');

        if (moto.imagen1) {

            modalImage.src =
                `/static/${moto.imagen1}`;

            modalImage.alt =
                `${moto.marca} ${moto.modelo}`;

            modalImage.style.display = 'block';

        } else {

            modalImage.style.display = 'none';

        }


        // MOSTRAR MODAL

        modal.classList.add('show');

    });

});


// CERRAR CON X

closeModal.addEventListener('click', () => {

    modal.classList.remove('show');

});


// CERRAR HACIENDO CLICK AFUERA

modal.addEventListener('click', event => {

    if (event.target === modal) {

        modal.classList.remove('show');

    }

});


// CERRAR CON ESC

document.addEventListener('keydown', event => {

    if (event.key === 'Escape') {

        modal.classList.remove('show');

    }

});


// ==============================
// TABS DE ACCESO
// ==============================

const tabs = document.querySelectorAll('.tab');
const forms = document.querySelectorAll('.form');

tabs.forEach(tab => {

    tab.addEventListener('click', () => {

        tabs.forEach(t => {
            t.classList.remove('active');
        });

        forms.forEach(form => {
            form.classList.remove('active');
        });

        tab.classList.add('active');

        document
            .getElementById(tab.dataset.tab)
            .classList.add('active');

    });

});