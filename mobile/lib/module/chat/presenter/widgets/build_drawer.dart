import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:minimaxis_app/core/extensions/build_context_utils.dart';
import 'package:minimaxis_app/core/styles/colors.dart';
import 'package:minimaxis_app/core/styles/text_style.dart';

Drawer buildDrawer(BuildContext context) {
  final styleModifier = context.appTextStyles;
  return Drawer(
    backgroundColor: AppColors.onPrimary,
    child: ListView(
      padding: EdgeInsets.zero,
      children: [
        DrawerHeader(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              SizedBox(
                height: 48,
                width: 52.80,
                child: Image.asset('assets/logo.png'),
              ),
              const SizedBox(
                height: 10,
              ),
              Text(
                "View",
                style: GoogleFonts.inter(textStyle: styleModifier.smallWhite),
              ),
              const SizedBox(
                height: 10,
              ),
              Column(
                children: [
                  InkWell(
                    onTap: () {},
                    child: Row(
                      children: [
                        SizedBox(
                          height: 18,
                          width: 18,
                          child: Image.asset('assets/check.png'),
                        ),
                        const SizedBox(
                          width: 5,
                        ),
                        Text(
                          "Message",
                          style: GoogleFonts.inter(
                              textStyle: styleModifier.smallWhite),
                        )
                      ],
                    ),
                  ),
                  const SizedBox(
                    height: 10,
                  ),
                  InkWell(
                    onTap: () {},
                    child: Row(
                      children: [
                        const SizedBox(
                          height: 18,
                          width: 18,
                        ),
                        const SizedBox(
                          width: 5,
                        ),
                        Text(
                          "Flowchart",
                          style: GoogleFonts.inter(
                              textStyle: styleModifier.smallGray),
                        )
                      ],
                    ),
                  ),
                ],
              )
            ],
          ),
        ),
        Padding(
          padding: const EdgeInsets.all(8.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                "Current Conversation",
                style:
                    GoogleFonts.inter(textStyle: styleModifier.smallSuperWhite),
              ),
              const SizedBox(
                height: 5,
              ),
              Container(
                alignment: Alignment.center,
                height: 32,
                width: context.mediaWidth * 0.8,
                decoration: BoxDecoration(
                    color: AppColors.secondary,
                    borderRadius: BorderRadius.circular(5)),
                child: Text(
                  "Write a bitcoin miniscript with a 3 out of 3...",
                  style: GoogleFonts.inter(textStyle: styleModifier.smallWhite),
                ),
              ),
            ],
          ),
        )
      ],
    ),
  );
}
