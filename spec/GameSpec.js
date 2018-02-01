describe("Game", function() {
  var game;


  beforeEach(function() {
    game = new Game();
  });


it("Game should start with an empty 3x3 board", function() {
    expect(game._board).toEqual([null, null, null, null, null, null,  null, null, null]);
  });


  it("Player can claim a square of the 3x3 board by marking with X", function() {
      game.selectSquare(0);
      expect(game._board).toEqual(["X", null, null, null, null, null,  null, null, null]);
    });


});
