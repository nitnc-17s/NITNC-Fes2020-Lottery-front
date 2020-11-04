# 抽選会システム

## 実行
```
yarn install
yarn dev
```

.env
```
APIHost = "https://example.com" //API用
WSHost = "wss://example.com" //WebSocket用
```


## 仕様
### フロントエンド

#### /view/public

#### 概要

- WebSocketにより表示情報を受信
- 操作機能はなし
- 配信に載せる画面

#### /view/monitor

#### 概要

- WebSocketにより表示情報を受信
- 操作機能はなし
- 配信時に司会が確認する用


#### /operation

##### 概要

- `/view`の操作用
- ぶっちゃけUIはカスでいい
