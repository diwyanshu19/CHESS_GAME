class Rook extends Piece {
  constructor(position, name) {
    super(position, "rook", name);
  }

  changePosition(position) {
    this.position = parseInt(position);
  }

  getAllowedMoves() {
    return [
      this.getMovesTop(),
      this.getMovesBottom(),
      this.getMovesRight(),
      this.getMovesLeft(),
    ];
  }
}
