class UsersController < ApplicationController
  def index
    @users = User.all 

    render json: @users 
  end

  def show
    @users = User.find(params[:id])

    render json: @users, include: :riddles
  end

  def show
    @user = User.find(params[:id])

    render json: @users
  end

  def create
    @user = User.new(user_params)

    if @user.save
      @token = encode({ id: @user.id })
      render json: {
        user: @user.attributes.except('password_digest'),
        token: @token
      }, status: :created
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def verify
    render json: @current_user.attributes.except("password_digest"), status: :ok
  end

  def update
    if @user.update(user_params)
      render json: @user
    else 
      render json: @user.errors, status: :unprocessable_entity
  end
  end

  def destroy 
    @user = User.find(params[:id])

    @user.destroy
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end

end
