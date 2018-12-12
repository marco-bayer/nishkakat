export class LoadCharacters {
  static readonly type = '[Character] LoadCharacters';
}

export class CharactersFetched {
  static readonly type = '[Character] CharactersFetched';
  constructor(public characters: string[]) {}
}
