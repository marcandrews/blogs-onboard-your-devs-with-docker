FROM ubuntu:16.04

# Update source list
RUN apt-get update && apt-get install -y -qq --no-install-recommends \
  # Install dependencies
  software-properties-common \
  libssl-dev \
  build-essential \
  curl \
  wget \
  git \

  # Clean up
  && apt-get clean && rm -rf /var/lib/apt/lists/*

# Install Node.js
RUN dir=`mktemp -d` \
  && git clone https://github.com/tj/n.git $dir \
  && cd $dir \
  && make install \
  && n 6 \
  && npm i -g nodemon

CMD ["/bin/bash"]