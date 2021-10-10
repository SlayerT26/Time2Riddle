class RiddlesController < ApplicationController
  before_action :set_riddle, only: [:show, :update, :destroy, :add_answer_to_riddle]
  before_action :authorize_request, only: [:user_riddles, :show, :create, :update, :destroy]

  def index
    @riddles = Riddle.all

    render json: @riddles 
  end

  def user_riddles
    @riddles = Riddle.where(user: @current_user)
  end

  def show
    render json: @riddles, include: :answers
  end

  def create
    @riddle = Riddle.new(riddle_params)
    @riddle.user = @current_user

    if @riddle.save
      render json: @riddle, status: :created
    else
      render json: @riddle.errors, status: :unprocessable_entity
    end
  end


  def update
    if @riddle.update(riddle_params)
      render json: @riddle
    else
      render json: @riddle.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @riddle.destroy
  end

  def add_answer_to_riddle
    @answer = Answer.find(params[:answer_id])

    render json: @riddle, include: :answer
  end

  private

    def set_riddle
      @riddle = Riddle.find(params[:id])
    end

    def riddle_params
      params.require(:riddle).permit(:question, :answer)
    end
end
