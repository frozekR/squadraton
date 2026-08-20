/* ну пока условный мок */

type Hero = {
  id: number
  name: string
  description: string
  role: string
}

export const heroes: Hero[] = [
  { id: 1, name: 'Super Saiyan Goku', description: `
    An all-rounder who dives headfirst into enemy lines and fights with relentless determination.
Use Kaioken at just the right time, then finish the fight with Spirit Bomb or Kamehameha!`, role: 'Damage' },
  { id: 2, name: 'Super Saiyan Vegeta', description: `
    A fierce warrior with incredible combat skills and a strong sense of honor.
Use his signature techniques like Meteor Mash and Final Flash to overwhelm opponents!`, role: 'Tank' },
  { id: 3, name: 'Super Saiyan Trunks', description: `
    A skilled fighter who combines his father's strength with his mother's tactical brilliance.
Use his powerful attacks and strategic thinking to outmaneuver enemies!`, role: 'Damage' },
]

export default heroes