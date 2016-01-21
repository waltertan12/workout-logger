class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception

  def login_user!(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
  end

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def ensure_user_logged_in
    unless logged_in?
      render json: "User not logged in", status: 422
    end
  end

  def ensure_current_user(user)
    user.id == current_user.id
  end
end
