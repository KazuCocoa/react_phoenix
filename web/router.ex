defmodule ReactPhoenix.Router do
  use ReactPhoenix.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", ReactPhoenix do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
    get "/hello_world", HelloWorldController, :index
  end

  scope "/api", ReactPhoenix do
    pipe_through :api

    get "/", PageController, :index
  end

  # Other scopes may use custom stacks.
  # scope "/api", ReactPhoenix do
  #   pipe_through :api
  # end
end
