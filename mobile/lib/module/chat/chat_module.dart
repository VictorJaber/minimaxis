import 'package:flutter_modular/flutter_modular.dart';
import 'package:minimaxis_app/module/chat/presenter/screens/chat_screen.dart';

class ChatModule extends Module {

  @override
  List<Bind> get binds => [

  ];

  @override
  List<ChildRoute> get routes => [
    ChildRoute('/', child: (context, args) => const ChatScreen()),
  ];
}