import { faker } from '@faker-js/faker'

const createHero = (el, index) => {
    return {
        id: (index + 1),
        name: faker.name.findName(),
    }
}

const CreateHeros = (numUsers = 10) => {
    return new Array(numUsers)
        .fill(undefined)
        .map(createHero);
}

export default CreateHeros;