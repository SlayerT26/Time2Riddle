class AnswersController < ApplicationController
  before_action :set_answer, only: [:show, :update, :destroy]
  before_action :authorize_request, only: [:create, :update, :destroy]

  def index
    @answers = Answer.all

    render json: @answers
  end

  # GET /foods/1
  def show
    render json: @answers
  end

  private

    def set_answer
      @answer = Answer.find(params[:id])
    end

end
