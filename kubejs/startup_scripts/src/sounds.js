StartupEvents.registry("sound_event", event => {
    event.create("machine.compressor.start")
    event.create("machine.compressor.stop")
    event.create("machine.compressor.run")
})