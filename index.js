const names = ['Jaylynn', 'Marie', 'Juknay', 'Margaux', 'Jalec', 'Kim', 'Jastro', 'Mandy']

for (let i  = 0; i < names.length; i++) {
    const name = names[i]
    const first = name.charAt(0)

    if (first.toLowerCase() === 'j') {
        console.log(`Goodbye ${name}`)
    } else {
        console.log(`Hello ${name}`)
    }
}
//Using the other method cause I already knew it.