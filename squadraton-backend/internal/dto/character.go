package dto

type CreateCharacterRequest struct {
	ID          string `json:"id" validate:"required"`
	UUID        string `json:"uuid" validate:"required"`
	Name        string `json:"name" validate:"required"`
	Description string `json:"description"`
	Role        string `json:"role" validate:"required"`
}

type CreateSkillRequest struct {
	ID          string `json:"id" validate:"required"`
	UUID        string `json:"uuid" validate:"required"`
	Name        string `json:"name" validate:"required"`
	Description string `json:"description"`
	CharacterID string `json:"char_id" validate:"required"`
}
