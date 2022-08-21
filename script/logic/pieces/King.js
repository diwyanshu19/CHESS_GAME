class King extends Piece {
  constructor(position, name) {
    super(position, "king", name);
  }

  getAllowedMoves() {
    const position = this.position;
    const allowedMoves = [
      [parseInt(position) + 1],
      [parseInt(position) - 1],
      [parseInt(position) + 10],
      [parseInt(position) - 10],
      [parseInt(position) + 11],
      [parseInt(position) - 11],
      [parseInt(position) + 9],
      [parseInt(position) - 9],
    ];
    return allowedMoves;
  }

  changePosition(position) {
    this.position = parseInt(position);
  }
}
