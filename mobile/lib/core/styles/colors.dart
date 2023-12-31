import 'package:flutter/material.dart';

class AppColors {
  AppColors._();
  static AppColors? _instance;

  static AppColors get instance {
    _instance ??= AppColors._();
    return _instance!;
  }

  static Color get primary => const Color(0x4CFFA500);
  static Color get onPrimary => const Color(0xFF1A1A1A);
  static Color get secondary => const Color(0xFF393B3F);
  static Color get onSecondary => Colors.white;
  static Color get tertiary => const Color(0xFF7B7C83);
}
