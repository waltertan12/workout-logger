class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)

    if params[:user][:password] != params[:user][:password_confirmation]
      render json: ['Password does not match'], status: 422
    elsif @user.save
      log_in_user!(@user)
      render json: @user
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    render json: @user
  end

  def update
  end

  def destroy
  end

  def index
  end

  private
  def user_params
    params.require(:user).permit(
      :username, 
      :email,
      :image_url,
      :password, 
      :password_confirmation
    )
  end
end
