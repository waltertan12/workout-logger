class StaticPagesController < ApplicationController
  GAINS = [
    'such strong',
    '+1',
    'no',
    'you\'re weak',
    'curls for the gurls',
    'gloots for the sloots',
    'curl http://gains.com :(',
  ]

  def index
  end

  def gains

    render json: { gains: GAINS.sample }
  end
end
