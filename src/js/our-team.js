import { teamItems } from "./team-data";
import Glide from '@glidejs/glide'

const teamItemContainer = document.querySelector('.team__list');
const teamMarkup = createMarkup(teamItems);
teamItemContainer.insertAdjacentHTML("beforeend", teamMarkup);

function createMarkup(teamItems) {
    return teamItems.map(({preview, name, description, role }) => {
        return `
        <li class="glide__slide">
            <img class="team__image" src="${preview}" alt="${description}">
            <h3 class="team__subtitle">${name}</h3>
            <p class="team__item"> ${role}</>
        </li>`;
    })
    .join("");
}



new Glide('.glide').mount()

