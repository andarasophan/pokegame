class StatusEnum {
  static hp = 'hp'
  static attack = 'attack'
  static defense = 'defense'
  static specialAttack = 'special-attack'
  static specialDefense = 'special-defense'
  static speed = 'speed'

  static getAbr(str) {
    switch (str) {
      case StatusEnum.hp:
        return 'hp';
      case StatusEnum.attack:
        return 'atk';
      case StatusEnum.defense:
        return 'def';
      case StatusEnum.specialAttack:
        return 'satk';
      case StatusEnum.specialDefense:
        return 'sdef';
      case StatusEnum.speed:
        return 'spd';
      default:
        return str;
    }
  }
}

export default StatusEnum;
