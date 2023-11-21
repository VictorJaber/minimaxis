import 'package:flutter/material.dart';
import 'package:minimaxis_app/core/styles/colors.dart';
import 'package:minimaxis_app/module/chat/presenter/widgets/build_appbar.dart';
import 'package:minimaxis_app/module/chat/presenter/widgets/build_drawer.dart';
import 'package:minimaxis_app/module/chat/presenter/widgets/text_input_widget.dart';

class ChatScreen extends StatefulWidget {
  const ChatScreen({Key? key}) : super(key: key);

  @override
  State<ChatScreen> createState() => _ChatScreenState();
}

class _ChatScreenState extends State<ChatScreen> {
  late TextEditingController inputChatController;

  @override
  void initState() {
    inputChatController = TextEditingController();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppColors.onPrimary,
      appBar: buildAppbar(context),
      drawer: buildDrawer(context),
      body: Column(
        children: [
          buildChatList(),
          TextInputWidget(textController: inputChatController),
        ],
      ),
    );
  }
}

Expanded buildChatList() {
  return const Expanded(
    child: Text(""),
  );
}
