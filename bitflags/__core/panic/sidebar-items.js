initSidebarItems({"fn":[["catch_unwind","Invokes a closure, capturing the cause of an unwinding panic if one occurs."],["propagate","Deprecated, use resume_unwind instead"],["recover","Deprecated, renamed to `catch_unwind`"],["resume_unwind","Triggers a panic without invoking the panic hook."],["set_handler",""],["set_hook","Registers a custom panic hook, replacing any that was previously registered."],["take_handler",""],["take_hook","Unregisters the current panic hook, returning it."]],"struct":[["AssertRecoverSafe","Deprecated, renamed to `AssertUnwindSafe`"],["AssertUnwindSafe","A simple wrapper around a type to assert that it is panic safe."],["Location","A struct containing information about the location of a panic."],["PanicInfo","A struct providing information about a panic."]],"trait":[["RecoverSafe","Deprecated, renamed to UnwindSafe"],["RefUnwindSafe","A marker trait representing types where a shared reference is considered recover safe."],["UnwindSafe","A marker trait which represents \"panic safe\" types in Rust."]]});