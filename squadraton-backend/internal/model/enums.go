package model

type (
	CharacterRole string
	SkillType     string
	OwnerType     string
	MediaType     string
)

const (
	CharacterRoleDamage    = CharacterRole("DAMAGE")
	CharacterRoleTank      = CharacterRole("TANK")
	CharacterRoleTechnical = CharacterRole("TECHNICAL")
)
