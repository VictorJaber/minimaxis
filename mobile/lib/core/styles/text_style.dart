import 'package:flutter/material.dart';
import 'package:minimaxis_app/core/styles/colors.dart';

class AppTextStyles {
  AppTextStyles._();

  static AppTextStyles? _instance;

  static AppTextStyles get instance {
    _instance ??= AppTextStyles._();
    return _instance!;
  }

  TextStyle get smallWhite => TextStyle(
        color: AppColors.onSecondary,
        fontSize: 11,
        fontWeight: FontWeight.w500,
      );

  TextStyle get smallSuperWhite => TextStyle(
        color: AppColors.onSecondary,
        fontSize: 12,
        fontWeight: FontWeight.w600,
      );

  TextStyle get defaultWhite => TextStyle(
        color: AppColors.onSecondary,
        fontSize: 17,
        fontWeight: FontWeight.w400,
      );

  TextStyle get smallGray => TextStyle(
        color: AppColors.tertiary,
        fontSize: 10.13,
        fontWeight: FontWeight.w500,
      );
}

extension AppTextStylesExtension on BuildContext {
  AppTextStyles get appTextStyles => AppTextStyles.instance;
}
