class RiddlesController < ApplicationController
  before_action :set_riddle, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy]

  def index
    @riddles = Riddle.all

    render json: @riddles include: :answers
  end

  # GET /foods/1
  def show
    render json: @riddles, include: :answers
  end

  # POST /foods
  def create
    @riddle = Riddle.new(riddle_params)
    @riddle.user = @current_user

    if @riddle.save
      render json: @riddle, status: :created
    else
      render json: @riddle.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /foods/1
  def update
    if @riddle.update(riddle_params)
      render json: @riddle
    else
      render json: @riddle.errors, status: :unprocessable_entity
    end
  end

  # DELETE /foods/1
  def destroy
    @riddle.destroy
  end

  # adding flavor to food method goes here
  def add_answer_to_riddle
    @riddle = Riddle.find(params[:id])
    @answer = Answer.find(params[:answer_id])

    render json: @riddle, include: :answer
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_riddle
      @riddle = Riddle.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def riddle_params
      params.require(:riddle).permit(:question, :answer)
    end
end
