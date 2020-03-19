启动虚拟机：

```bash
/Users/zhangxudong6/Library/Android/sdk/emulator/emulator -netdelay none -netspeed full -avd  Nexus_5_API_29
```



#### Flutter状态管理redux

##### 1. 依赖库 

redux、flutter_redux

##### 2. 用到的api，及使用到的参数（api的参数不止我使用到的)

+ 创建一个store `Store<State>(Reducer, State initState)`

+ 将store注入到全局   `StoreProvider<S>(Store store, Widget child)`
+ 在组件中使用 `StoreConnector<S, ViewModel>(converter, builder)`

##### 3. 实际操作

```dart
// 1. 创建state
class CountState {
  final int _count;
  get count() {
    return _count;
  }
  CountState(this._count);
  CountState.initState() : _count = 0;
}
// 2. 创建action。 注意坑：这里的命名最好不要用Action/Actions，在引用的插件里有这两个变量
enum CountAction {
  increment
}
// 3. 创建reducer，接受两个参数，一个原有的state，一个是action。返回类型为CountState
CountState countReducer(CountState state, action) {
  if(action == CountAction.increment) {
     return CountState(state.count+1);
   }
  return state;
}
// 4. 在入口创建store
final store = Store<CountState>(countReducer, CountState.initState());
// 5. 将store注入到全局
Widget build(BuildContext context) {
  return StoreProvider<CountState>(
    store: store,
    child: new MaterialApp(
    	title: 'reudx counter demo',
    	home: FirstScreen(),
    ),
  );
}
// 6. 在组件中读取store上的state
body: Center(
  child: StoreConnector<CountState, int>(
  	converter: (store) => store.state.count,
  	builder: (context, count){
    	return new Text(
      	count.toString(),
    	);
  	},
	),
),
// 7. 在按钮组件上发送一个action
floatingActionButton: StoreConnector<CountState, VoidCallback>(
  converter: (store) {
  	return () => store.dispatch(CountAction.increment);
	},
  builder: (context, callback) {
    return FloatingActionButton(onPressed: callback, child: new Icon(Icons.add),);
  },
),
  
```

