defmodule Sling.Auth.Pipeline do
  use Guardian.Plug.Pipeline,
    otp_app: :sling,
    error_handler: Sling.Auth.ErrorHandler,
    module: Sling.Auth.Guardian

  plug Guardian.Plug.VerifySession, claims: %{"typ" => "access"}
  plug Guardian.Plug.VerifyHeader, claims: %{"typ" => "access"}
  plug Guardian.Plug.LoadResource, allow_blank: true
end
