class AnswersController < ApplicationController
  before_action :set_answer, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:index, :create, :update, :destroy]
  before_action :answer_params, only: [:create]
  before_action :set_riddle, only: [:index, :create]

  def index
    @answers = Answer.where(user: @current_user).where(riddle: @riddle)

    render json: @answers
  end

  def create
    # @answer = Answer.new(answer_params)
    @guess = answer_params[:guess]
    @correct = @guess.downcase == @riddle.answer.downcase
    @answer = Answer.new 
    if @correct 
      @answer.answer = @guess
    else
      @answer.guess = @guess
    end

    @answer.riddle = @riddle
    @answer.user = @current_user
    if @answer.save 
      render json: @answer, include: :riddle, status: :created
    else 
      render json: @answer.errors, status: :unprocessable_entity
    end
  end

  private

    def set_answer
      @answer = Answer.find(params[:id])
    end

    def set_riddle
      @riddle = Riddle.find(params[:riddle_id])
    end

    def answer_params
      params.require(:answer).permit(:guess)
    end

end
