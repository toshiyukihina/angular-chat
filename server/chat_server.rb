require 'em-websocket'

EM.run {
  EM::WebSocket.run(:host => "0.0.0.0", :port => 3000, :debug => true) do |ws|
    ws.onopen { |handshake|
      puts "WebSocket opened #{{
        :path => handshake.path,
        :query => handshake.query,
        :origin => handshake.origin,
      }}"

      ws.send "Hello Client!"
    }
    ws.onmessage { |msg|
      ws.send "Pong: #{msg}"
    }
    ws.onclose {
      puts "WebSocket closed"
    }
    ws.onerror { |e|
      puts "Error: #{e.message}"
    }
  end
}

# conns = []

# EM::WebSocket.start(host: "localhost", port: 3000) do |c|
#   c.onopen do
#     puts '>> client connected.'
#     conns << c
#   end
#   c.onmessage do |msg|
#     puts '<< dispatch message.'
#     conns.each {|conn| conn.send }
#   end
# end
